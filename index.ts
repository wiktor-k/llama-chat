const chatHistory: Array<{role: string; content: string}> = [
//{role: 'system', content: 'You are Mario from Super Mario Bros. Answer as Mario, the assistant, only.'}
];
while (true) {
	const msg = prompt('=== You:');
	if (!msg) {
		break; 
	}

	chatHistory.push({
		role: 'user',
		content: msg,
	});

	const resp = await fetch('http://localhost:11434/api/chat', {method: 'POST', body: JSON.stringify({
		model: 'llama3',
		messages:chatHistory,
		stream: false,
	})});
	if (!resp.ok) {
		break; 
	}

	const answer = await resp.json();
	chatHistory.push(answer.message);
	console.log(`=== Bot: ${answer.message.content}`);
	console.log();

}
