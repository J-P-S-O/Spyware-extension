const { exec } = require("child_process");
const fs = require("fs")
exec("cd..", () =>{})
exec("cd..", ()=>{})
exec("npx standard --fix", (error, stdout, stderr) => {
	console.log(`stdout: ${stdout}`);
	let logs = stdout.split("\n")
	for (i in logs){
	console.log(i.split(".js")[0])
} 
const data = fs.readFileSync(".standard.config")
if (logs.length > Number(data)){
	process.exit(1)	
}
   
});