Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "python -m http.server 8085", 0, False
