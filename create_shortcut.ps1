# Create Direct Desktop Shortcut for yukiyanArt Feedback Hub
$desktop = [System.Environment]::GetFolderPath('Desktop')
$shortcutPath = Join-Path $desktop "yukiyanArt Feedback Hub.lnk"
$target = "C:\Users\Iwamoto\.gemini\antigravity\scratch\feedback_hub\index.html"

$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut($shortcutPath)
$Shortcut.TargetPath = $target
$Shortcut.WorkingDirectory = "C:\Users\Iwamoto\.gemini\antigravity\scratch\feedback_hub"
$Shortcut.IconLocation = "C:\Users\Iwamoto\.gemini\antigravity\scratch\feedback_hub\assets\icons\yukiyanart_logo.jpg"
$Shortcut.Save()

Write-Host "Created direct shortcut on Desktop successfully!" -ForegroundColor Green
