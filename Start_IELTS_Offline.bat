@echo off
title IELTS Academic Offline Engine
cd /d "%~dp0"
echo ========================================================
echo   Starting 100%% Offline IELTS Academic Practice App
echo ========================================================
echo.
start "" http://localhost:8080
node server.mjs
pause
