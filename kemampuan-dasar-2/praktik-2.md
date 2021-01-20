ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone
$ git clone https://github.com/dzakimubarok/socialanalytics.git templates
Cloning into 'templates'...
remote: Enumerating objects: 129, done.
remote: Counting objects: 100% (129/129), done.
remote: Compressing objects: 100% (43/43), done.
remote: Total 129 (delta 83), reused 129 (delta 83), pack-reused 0
Receiving objects: 100% (129/129), 25.49 KiB | 567.00 KiB/s, done.
Resolving deltas: 100% (83/83), done.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone
$ cd templates

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone/templates (master)
$ git checkout -b frontend
Switched to a new branch 'frontend'

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone/templates
$ git add .

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone/templates (frontend)
$ git commit -m "information added in readme"
[frontend 1324a9f] information added in readme
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 dummu.txt

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone/templates (frontend)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone/templates (master)
$ git branch
  frontend
* master

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone/templates (master)
$ git remote -v
origin  https://github.com/dzakimubarok/socialanalytics.git (fetch)
origin  https://github.com/dzakimubarok/socialanalytics.git (push)

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Clone/templates (master)
$ git push origin frontend
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 278 bytes | 278.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'frontend' on GitHub by visiting:
remote:      https://github.com/dzakimubarok/socialanalytics/pull/new/frontend
remote:
To https://github.com/dzakimubarok/socialanalytics.git
 * [new branch]      frontend -> frontend

$ git add .
warning: LF will be replaced by CRLF in twinkle-twinkle.txt.
The file will have its original line endings in your working directory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/alice/rhymes (master)
$ git commit -m "Bugfix close #1"
[master 6c2fc3d] Bugfix close #1
 1 file changed, 1 insertion(+), 1 deletion(-)

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/Collaborative/alice/rhymes (master)
$ git push alice master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 299 bytes | 299.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/dzakimubarok/rhymes.git
   e6180b7..6c2fc3d  master -> master


ASUS@DESKTOP-3RLRVG8 MINGW64 /d/CI (master)
$ git submodule add https://github.com/dzakimubarok/CI.wiki.git
Cloning into 'D:/CI/CI.wiki'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
warning: LF will be replaced by CRLF in .gitmodules.
The file will have its original line endings in your working directory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/CI (master)
$ git add .
warning: LF will be replaced by CRLF in .gitmodules.
The file will have its original line endings in your working directory

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/CI (master)
$ git commit -m "added wiki as submodule"
[master 76e394f] added wiki as submodule
 3 files changed, 7 insertions(+), 1 deletion(-)
 create mode 100644 .gitmodules
 create mode 160000 CI.wiki

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/CI (master)
$ git push origin master
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 561 bytes | 280.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/dzakimubarok/CI.git
   6ac09dd..76e394f  master -> master

ASUS@DESKTOP-3RLRVG8 MINGW64 /d/CI (master)
$
