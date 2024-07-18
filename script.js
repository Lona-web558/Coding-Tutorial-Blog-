// Initialize Ace editor
let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// Run code button functionality
document.getElementById('runCode').addEventListener('click', function() {
    let code = editor.getValue();
    let output = document.getElementById('output');
    output.innerHTML = '';
    
    try {
        // Capture console.log output
        let oldLog = console.log;
        console.log = function(...args) {
            output.innerHTML += args.join(' ') + '<br>';
            oldLog.apply(console, args);
        };
        
        // Run the code
        eval(code);
        
        // Restore console.log
        console.log = oldLog;
    } catch (error) {
        output.innerHTML = 'Error: ' + error.message;
    }
});