# Llama Chat

Implements a simple REPL chat with a locally running instance of Ollama.

Requires [`ollama`](https://hub.docker.com/r/ollama/ollama) to run locally.
For example the following snippet runs it in a docker container:

```sh
docker run --rm -it -v ollama:/root/.ollama -p 11434:11434 ollama/ollama
```

Additionally the [`llama3` model](https://ollama.com/library/llama3) has to be downloaded.
If it's not available it can be pulled via this one-time action:

```sh
curl http://localhost:11434/api/pull -d '{
  "name": "llama3"
}'
```

## Example

The following shows a sample session with the bot:

```
$ deno run --allow-net index.ts
=== You: complete this sentence with a 4-letter word: the cat sat in the
=== Bot: Sun

=== You: Did you understand the question?
=== Bot: I think I did!

You want me to complete the sentence "the cat sat in the" with a 4-letter word, right?

In that case, my answer would be: bed

=== You: And how many letters are in the word you wrote?
=== Bot: I apologize for the mistake! I wrote the word "bed", which has only 3 letters: B-E-D. Not 4!

Let me try again. A new attempt to complete the sentence with a 4-letter word would be:

the cat sat in the DOOR
```

Since this example stores chat history the bot has enough context to answer more broad set of questions.

By default there is no prompt but this can be easily adjusted by editing `index.ts`.

## See also

- [`ollama` API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md)
