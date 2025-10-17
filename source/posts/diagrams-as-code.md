<steelsky>
{
    "title":"Diagrams as Code",
    "description":"Eploring Mermaid.js.",
    "tags":"#programming #thoughts",
    "type":"post",
    "date":"2023-04-01"
}
</steelsky>

## Diagrams as Code

Mermaid is a domain specific language (DSL) that is used to generate graphs an diagrams. Mermaid is modular, portable and efficient. 

> Learning a little bit of mermaid is perhaps the highest ROI learning activity I've done in years. Easier, quicker communication about technical ideas - for me it's been a game changer that has made it much easier to get buy in on ideas.

    - hamandcheese (HN)

> Mermaid's single biggest value prop for me is its ability to connect nodes "well enough" without me needing to fiddle with it. Sometimes I want to ("if I were doing it by hand, I'd put that over there", etc), but I love that it just works. Also that I can encode diagrams in text, so I get all of the tooling that we've developed around text. Feels so obvious in hindsight.

    - xavdid (HN)

- Easy refactoring with your standard text/code editing tools. 
- Fully portable to the web and all operating systems.
- No vendor lock-in.
- Native support for [TONS of tools](https://mermaid.js.org/ecosystem/integrations.html).
- Simple version control solutions (since it' all text based).
- Easy sharing and collab.
- Generate diagrams (mermaid code) with code.
- Simple expressive syntax that can be understood by non-programmers.
- Export as an image or embed on the web.
- [Render images on CLI](https://github.com/mermaid-js/mermaid-cli) which can be fully automated.


## Examples

<pre class="mermaid">
    graph TD 
    A[Client] --> B[Load Balancer] 
    B --> C[Server1] 
    B --> D[Server2]
</pre>

Syntax:
```
graph TD 
    A[Client] --> B[Load Balancer] 
    B --> C[Server1] 
    B --> D[Server2]
```

And here is another:
<pre class="mermaid">
    graph TD 
    A[Client] -->|tcp_123| B
    B(Load Balancer) 
    B -->|tcp_456| C[Server1] 
    B -->|tcp_456| D[Server2]
</pre>

A pie chart:
<pre class="mermaid">
    pie title PIE
         "Pie" : 75
         "Not Pie" : 25
</pre>

[More examples at mermaid.js.org](https://mermaid.js.org/syntax/examples.html)

## Working with LLMS


<script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
      mermaid.initialize({ startOnLoad: true });
</script>
