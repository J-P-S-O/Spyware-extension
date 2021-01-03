const { exec } = require("child_process");
exec("cd..", () =>{})
exec("cd..", ()=>{})
exec("npx standard --fix", (error, stdout, stderr) => {
	console.log(`stdout: ${stdout}`);
	let logs = stdout.split("\n")
	for (i in logs){
	console.log(i.split(".js")[0])
} 
if (logs.length > int(require("fs").readFileSync(".standard.config")){
	process.exit(1)	
   
});