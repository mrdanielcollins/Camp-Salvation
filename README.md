# Camp-Salvation
Camp Salvation Website

Getting Started:
1. Clone Repo
2. In root directory run command "sudo npm install --save"
3. In root directory run command to start "node app.js"
4. In browser go to "http://localhost:3000/"

Git Flow For Making Changes:
1. Create and checkout branch "git branch -b <BRANCH_NAME>"
2. Make changes
3. add changes "git add <CHANGED/NEW_FILE>"
4. Commit changes "git commit -m '<COMMIT_MESSAGE>'"
5. Create remote branch "git push -u origin HEAD"

Git Flow For Integrating Changes:
1. On home page click "new pull request"
2. Select "Base:Integration" and Compare:<BRANCH_NAME>
3. Add message detail about the ticket
4. Wait for ticket to be aproved and merged in
5. Address any comments on peer review

Ticket Flow:
1. Go to "https://trello.com/b/HkVdGavU/camp-salvation"
2. Select a ticket from "Selected For Development" and move to "In Progress"
3. Once a ticket is completed and pull requested created, move ticket to "Peer Review"
4. Once comments have been addressed and pull request approved, move ticket to "Complete"
