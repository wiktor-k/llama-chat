# Llama Chat

Implements a simple REPL chat with history.

Requires [`ollama`](https://hub.docker.com/r/ollama/ollama) to run locally and also a model:

```sh
curl http://localhost:11434/api/pull -d '{
  "name": "llama3"
}'
```

```
$ deno run --allow-net index.ts /
=== You: some people have two different eye colors, is that a disease?
=== Bot: A common and fascinating question!

Having two different eye colors, also known as heterochromia iridum, is not typically considered a disease. It's actually a relatively rare but normal variation in human eye color.

Heterochromia can occur in various forms, including:

1. Complete heterochromia: One eye has a completely different color from the other.
2. Central heterochromia: A ring or sector of one eye color surrounded by another color.
3. Sectoral heterochromia: A small portion of one eye color within an otherwise normal-colored iris.

This condition is usually caused by genetic factors, such as:

* Inheritance: It can be inherited from parents who also have heterochromia.
* Mutations: Small changes in the genes that control eye pigmentation can cause heterochromia.
* Chromosomal abnormalities: Certain chromosomal disorders, like Turner syndrome or Klinefelter syndrome, may increase the risk of developing heterochromia.

In most cases, heterochromia is not associated with any other medical issues or complications. People with this condition often have normal vision and don't experience any significant problems related to their eye color difference.

However, in some rare instances, heterochromia can be a sign of an underlying genetic disorder or syndrome that may affect other parts of the body. For example:

* Waardenburg syndrome: A rare genetic disorder characterized by white patches on the skin, hair loss, and pigmentation abnormalities, including heterochromia.
* Sturge-Weber syndrome: A condition involving a congenital vascular malformation, which can also cause heterochromia.

If you or someone in your family has heterochromia, it's essential to consult with an eye doctor (ophthalmologist) and a genetic counselor to rule out any underlying conditions that might be causing the eye color difference. They will perform a comprehensive evaluation and provide guidance on managing any potential related issues.

=== You: what are the chances of it happening in humans?
=== Bot: Heterochromia iridum, or having two different eye colors, is relatively rare in humans. The exact prevalence varies depending on the type and extent of heterochromia.
```
