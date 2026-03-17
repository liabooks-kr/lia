#!/bin/bash
# Lia SessionStart Hook
# .lia/ 디렉토리를 감지하고 프로젝트 컨텍스트를 Claude에 전달합니다.

# stdin에서 JSON 입력 읽기
INPUT=$(cat)
CWD=$(echo "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('cwd',''))" 2>/dev/null)

if [ -z "$CWD" ]; then
  CWD=$(pwd)
fi

if [ -d "$CWD/.lia" ] && [ -f "$CWD/.lia/config.json" ]; then
  # 전체 브리핑을 python3로 안전하게 생성 (shell injection 방지)
  python3 -c "
import json, sys, os

cwd = '$CWD'
config_path = os.path.join(cwd, '.lia', 'config.json')
context_path = os.path.join(cwd, '.lia', 'context.md')

# config.json 읽기
with open(config_path) as f:
    c = json.load(f)

p = c.get('project', {})
w = c.get('workflow', {})
cnt = c.get('counters', {})

lines = ['[Lia Project Detected]']
lines.append(f\"Project: {p.get('name','unknown')} | Language: {p.get('language','ko')}\")
lines.append(f\"Stories: {cnt.get('story',0)} | Specs: {cnt.get('spec',0)} | Sprints: {cnt.get('sprint',0)}\")

active = []
if w.get('activeStory'): active.append(f\"Story: {w['activeStory']}\")
if w.get('activeSpec'): active.append(f\"Spec: {w['activeSpec']}\")
if w.get('activeSprint'): active.append(f\"Sprint: {w['activeSprint']}\")
if active:
    lines.append(f\"Active: {', '.join(active)}\")

# context.md 읽기 (최대 80줄)
if os.path.exists(context_path):
    with open(context_path) as f:
        context_lines = f.readlines()[:80]
    context = ''.join(context_lines).strip()
    if context:
        lines.append('')
        lines.append('Project Context:')
        lines.append(context)

briefing = '\n'.join(lines)

output = {
    'hookSpecificOutput': {
        'hookEventName': 'SessionStart',
        'additionalContext': briefing
    }
}
print(json.dumps(output))
" 2>/dev/null
else
  # .lia/ 미감지
  python3 -c "
import json
output = {
    'hookSpecificOutput': {
        'hookEventName': 'SessionStart',
        'additionalContext': '[Lia] No project detected. Use /lia to initialize a new project.'
    }
}
print(json.dumps(output))
"
fi

exit 0
