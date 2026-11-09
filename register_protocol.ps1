# Windows Protocol Register Script for feedbackhub://
# Run this PowerShell script to register feedbackhub:// URI scheme on your Windows PC.

$schemeName = "feedbackhub"
$regPath = "HKCU:\Software\Classes\$schemeName"
$webUrl = "http://localhost:8085/index.html"

# Create Registry Keys
New-Item -Path $regPath -Force | Out-Null
New-ItemProperty -Path $regPath -Name "(default)" -Value "URL:yukiyanArt Feedback Hub Protocol" -PropertyType String -Force | Out-Null
New-ItemProperty -Path $regPath -Name "URL Protocol" -Value "" -PropertyType String -Force | Out-Null

$commandPath = "$regPath\shell\open\command"
New-Item -Path $commandPath -Force | Out-Null

# Command to launch default browser with URL
$cmdValue = "cmd.exe /c start $webUrl"
New-ItemProperty -Path $commandPath -Name "(default)" -Value $cmdValue -PropertyType String -Force | Out-Null

Write-Host "Successfully registered ${schemeName}:// protocol for yukiyanArt Feedback Hub!" -ForegroundColor Green
