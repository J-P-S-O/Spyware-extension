const { exec } = require("child_process");
exec("cd..", () =>{})
exec("cd..", ()=>{})
exec("npx standard --fix", (error, stdout, stderr) => {
    if (stdout.split("\n").length > 1){
	process.exit(1)	
	}
    console.log(`stdout: ${stdout}`);
});