@echo off

call python rename.py %1 %2
call python set_uids.py %1
