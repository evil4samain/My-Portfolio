var before = document.getElementById('before')
var command = document.getElementById("input"); 
var textarea = document.getElementById("textbox"); 
var terminal = document.getElementById("terminal");
var git = 0
// List of all the entered commands
var commands = []

// Printing banner on loading
setTimeout(() => {
    printLines(banner, "", 80);
    textarea.focus();
}, 100);

// Open listeners and and initially set the text and history to blank
window.addEventListener("keyup", enterKey);
textarea.value = "";
command.innerHTML = textarea.value;

// Handles the pressing of different key presses
function enterKey(e) {
    // Reload
    if (e.keyCode == 181) {
      document.location.reload(true);
    }
    // Enter Key
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine(" guest@localhost:$ " + command.innerHTML, "no-animation", 0);
        router(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    // Previous commands (up)
    if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
    }
    // Next Command (down)
    if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
    }
}

// Router
function router(cmd){
    switch (cmd.toLowerCase()) {
        case "help":
            printLines(help, "color2 margin", 80);
            break;

        case "evil4samain":
            printLines(about, "color2 margin", 80)
            break;

        case "certificates":
            printLines(certificates, "color2 margin", 80)
            break;
            
        case "social":
            printLines(social, "color2 margin", 80)
            break;

        case "projects":
            printLines(projects, "color2 margin", 80)
            break;

        case "banner":
            printLines(banner, "", 80)
            break;
        
        case "history":
            addLine("<br>", "", 0);
            printLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;

        case "find":
            addLine('Opening mailto:<a href="mailto:officialgill8816@gmail.com">officialgill8816@gmail.com</a>...', "color2", 80);
            openNewTab(find);
            break;

        case "clear":
            setTimeout(() => {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            printLines(banner, "", 80)
            break;
        
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            openNewTab(linkedin);
            break;
        case "github":
            addLine("Opening Github...", "color2", 0);
            openNewTab(github);
            break;

        case "instagram":
            addLine("opening Instagram...", "color2", 0);
            openNewTab(instagram);
            break;

        case "facebook":
            addLine("Opening Facebook...", "color2", 0);
            openNewTab(facebook);
            break;

        case "twitter":
            addLine("Opening Twitter...", "color2", 0);
            openNewTab(twitter);
            break;

        case "discord":
            addLine("launching Discord_server...", "color2", 0);
            openNewTab(discord);
            break;

        case "thm":
            addLine("Opening Try_Hack_Me...", "color2", 0);
            openNewTab(tryhackme);
            break;

        case "htb":
            addLine("Opening Hack_the_Box...", "color2", 0);
            openNewTab(hackthebox);
            break;

        case "bugcrowd":
            addLine("Opening Bugcrowd...", "color2", 0);
            openNewTab(bugcrowd);
            break;

        case "hackerone":
            addLine("Opening Hackerone...", "color2", 0);
            openNewTab(hackerone);
            break;

        case "pentesterlab":
            addLine("Opening Pentester_Lab...", "color2", 0);
            openNewTab(pentesterlab);
            break;

        case "leetcode":
            addLine("Opening LeetCode...", "color2", 0);
            openNewTab(leetcode);
            break;
        
        case "resume":
            addLine("Opening the Resume...","color2",0);
            openNewTab(resume);
            break;

        case "spotify":
            addLine("Opening Spotify...","color2",0);
            openNewTab(spotify);
            break;

        case "cert1":
            addLine("Loading cert1...", "color2", 0);
            openNewTab(cert1);
            break; 

        case "cert2":
            addLine("Loading cert2...", "color2", 0);
            openNewTab(cert2);
            break;    
                
        case "cert3":
            addLine("Loading cert3...", "color2", 0);
            openNewTab(cert3);
            break;

        case "cert4":
            addLine("Loading cert4...", "color2", 0);
            openNewTab(cert4);
            break;

        case "cert5":
            addLine("Loading cert5...", "color2", 0);
            openNewTab(cert5);
            break;

        case "cert6":
            addLine("Loading cert6...", "color2", 0);
            openNewTab(cert6);
            break;

        case "cert7":
            addLine("Loading cert7...", "color2", 0);
            openNewTab(cert7);
            break;

        case "cert8":
            addLine("Loading cert8...", "color2", 0);
            openNewTab(cert8);
            break;

        case "cert9":
            addLine("Loading cert9...", "color2", 0);
            openNewTab(cert9);
            break;

        case "cert10":
            addLine("Loading cert10...", "color2", 0);
            openNewTab(cert10);
            break;

        case "cert11":
            addLine("Loading cert11...", "color2", 0);
            openNewTab(cert11);
            break;

        case "cert12":
            addLine("Loading cert12...", "color2", 0);
            openNewTab(cert12);
            break;

        case "cert13":
            addLine("Loading cert13...", "color2", 0);
            openNewTab(cert13);
            break;

        case "cert14":
            addLine("Loading cert14...", "color2", 0);
            openNewTab(cert14);
            break;


        case "ls":
            addLine("right practice at right place makes a man perfect, you got that!^*!<br>", "color2", 0);
            break;
        
        case "cd":
            addLine("there is nothing wrong with change, only if it is in right direction:)<br>", "color2", 0);
            break;

        case "sudo":
            addLine("with great power comes great responsibility! Isn't that!!<br>","color2",0);
            break;

        case "su":
            addLine("with great power comes great responsibility! Isn't that!!<br>","color2",0);
            break;    

        case "exit":
            window.close();
            addLine("If the window doesn't close, it might be because of a safety feature! Close the tab manually!","color2",0);
            break;

        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

// Print the contents of a list line by line
function printLines(name, style, time){
    name.forEach((item, index) => {
        addLine(item, style, index*time);
    })
}

function addLine(text, style, time) {

    // Replace all spaces with nbsp character
    var t = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
        t += "&nbsp;&nbsp;";
        i++;
      } else {
        t += text.charAt(i);
      }
    }

    // Create a new 'p' and append it to the terminal just before the before
    setTimeout(() => {
      var next = document.createElement("p");
      next.innerHTML = t;
      next.className = style;
  
      before.parentNode.insertBefore(next, before);
  
      window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

// Open a link in the new tab
// Open new Tab
function openNewTab(link) {
    setTimeout(() => {
      window.open(link, "_blank");
    }, 500);
  }
