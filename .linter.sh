#!/bin/bash
cd /home/kavia/workspace/code-generation/smartscope-learning-hub-64241-3f973479/smartscope_learning_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

