@echo off
setlocal enabledelayedexpansion
title IELTS Academic Master - Firebase Deployer
color 0b

echo ===============================================================================
echo        IELTS ACADEMIC MASTER - DEPLOY TO FIREBASE HOSTING (.web.app)
echo ===============================================================================
echo.
echo Current folder: %~dp0
echo.

cd /d "%~dp0"

set "FIREBASE_BIN=%APPDATA%\npm\node_modules\firebase-tools\lib\bin\firebase.js"
if not exist "%FIREBASE_BIN%" (
    set "FIREBASE_BIN=npx firebase"
)

echo Choose an option:
echo   [1] Fast Deploy (if already signed in)
echo   [2] Login via URL Code (--no-localhost, recommended if browser doesn't open)
echo   [3] Standard Browser Login (--reauth)
echo.
set /p LOGIN_CHOICE="Enter 1, 2, or 3 (default 2): "
if "!LOGIN_CHOICE!"=="" set "LOGIN_CHOICE=2"

if "!LOGIN_CHOICE!"=="2" (
    echo.
    echo Running Firebase login with manual code URL...
    echo (Copy the URL shown below into Chrome, click Allow, then paste the code here)
    echo.
    node "%FIREBASE_BIN%" login --no-localhost --reauth
)

if "!LOGIN_CHOICE!"=="3" (
    echo.
    echo Opening browser for Firebase login...
    node "%FIREBASE_BIN%" login --reauth
)

echo.
echo ===============================================================================
echo [Step 2] Configuring Firebase Project Target
echo ===============================================================================
if exist .firebaserc (
    echo Found existing project in .firebaserc:
    type .firebaserc
    echo.
    set /p CHANGE_PROJ="Do you want to use this project? (Y/N, default Y): "
    if /i "!CHANGE_PROJ!"=="N" (
        del .firebaserc
    )
)

if not exist .firebaserc (
    echo.
    echo Enter your Firebase Project ID below.
    echo (You can check your existing project IDs at https://console.firebase.google.com)
    echo Examples from your account: radikalsolutions-45444, sirm-pro-v, closequarters-43790
    echo Or any new project ID you created.
    echo.
    set /p PROJ_ID="Firebase Project ID: "
    if "!PROJ_ID!"=="" (
        echo [ERROR] Project ID cannot be empty.
        pause
        exit /b 1
    )
    (
        echo {
        echo   "projects": {
        echo     "default": "!PROJ_ID!"
        echo   }
        echo }
    ) > .firebaserc
    echo Configured project: !PROJ_ID!
)

echo.
echo ===============================================================================
echo [Step 3] Deploying to Firebase Hosting...
echo ===============================================================================
echo.
node "%FIREBASE_BIN%" deploy --only hosting

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===============================================================================
    echo SUCCESS! YOUR APP IS NOW LIVE ON FIREBASE HOSTING!
    echo ===============================================================================
    echo Your permanent URL is ready (e.g. https://[project-id].web.app)
    echo ===============================================================================
) else (
    echo.
    echo [ERROR] Deploy encountered an issue. See details above.
)

echo.
pause
