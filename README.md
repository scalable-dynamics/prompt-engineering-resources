# Prompt Engineering Resources

Prompt engineering is the process of structuring an instruction that can be interpreted and understood by a generative AI model. It enhances the effectiveness and efficiency of AI systems and is critical for developing advanced AI capabilities.

## Advanced Prompt Engineering Techniques

Based on the presentation by [Greg DeCarlo](https://linktr.ee/mrinreality), here are the key prompt engineering techniques:
**[The Status Quo of Prompt Engineering - Greg DeCarlo 2024.pdf](The-Status-Quo-of-Prompt-Engineering--Greg-DeCarlo-2024.pdf)**

### 1. In-Context Learning
- **Keywords:** Emergent abilities, temporary learning, meta-learning
- Utilize the model's ability to learn from prompts temporarily
- Adapt prompts based on the specific context of your project

### 2. Zero-Shot and Few-Shot Prompting
- **Keywords:** Task description, example-based learning
- Zero-Shot: Provide clear task descriptions without examples
- Few-Shot: Include 2-3 relevant examples before the main task

### 3. Chain-of-Thought (CoT) Prompting
- **Keywords:** Step-by-step reasoning, intermediate steps, logical thinking
- Guide the model to break down complex problems into smaller steps
- Useful for tasks requiring multi-step solutions or logical reasoning

### 4. Chain-of-Symbol (CoS) Prompting
- **Keywords:** Spatial reasoning, symbol interpretation, text formatting
- Use random symbols to assist with spatial reasoning in text
- Helpful for tasks involving layout or structure interpretation

### 5. Self-Consistency Decoding
- **Keywords:** Multiple rollouts, consistency check, reliability
- Generate multiple CoT solutions and select the most common conclusion
- Improves reliability for complex reasoning tasks

### 6. Generated Knowledge Prompting
- **Keywords:** Fact generation, contextual information, commonsense reasoning
- First prompt the model to generate relevant facts, then use these facts in the main prompt
- Enhances performance on tasks requiring specific knowledge or context

### 7. Prompt Chaining
- **Keywords:** Sequential prompts, task breakdown, structured responses
- Combine multiple prompts in sequence to guide the model through complex tasks
- Useful for breaking down projects into manageable steps

### 8. Tree of Thoughts (ToT)
- **Keywords:** Multiple paths, evaluation, breadth-first search, beam search
- Generate and evaluate multiple possible next steps for complex problem-solving
- Effective for tasks requiring exploration of different solution paths

### 9. Maieutic Prompting
- **Keywords:** Recursive explanations, logical consistency, self-questioning
- Prompt the model to explain parts of its explanation recursively
- Improves performance on tasks requiring high logical consistency

### 10. Least-to-Most Prompting
- **Keywords:** Sub-problem listing, sequential solving, task decomposition
- Guide the model to list sub-problems and solve them in sequence
- Ideal for breaking down complex challenges into smaller, manageable tasks

### 11. Complexity-Based Prompting
- **Keywords:** Multiple rollouts, longest chains, thoughtful reasoning
- Generate multiple CoT solutions and select based on complexity and consensus
- Useful for tasks requiring deep, multi-step reasoning

### 12. Self-Refinement
- **Keywords:** Iterative improvement, self-critique, feedback loop
- Prompt the model to solve, critique, and refine its own solutions
- Valuable for iteratively improving project outcomes during the course of the project

## More Tips
- Experiment with combining these techniques based on your specific project needs
- Use CoT and ToT for complex problem-solving and reasoning tasks
- Leverage Few-Shot prompting when you have clear examples of desired outputs
- Apply Self-Consistency and Complexity-Based Prompting for increased reliability in critical components
- Utilize Self-Refinement for iterative improvement of your project

## Folder Structure

```
PROMPT-ENGINEERING-LIBRARY/
│
├── Azure AI and Copilot Studio/
│   ├── Azure AI and Copilot Studio Resource Hub.html
│   ├── azure-ai-studio-resources.json
│   ├── azure-ai-troubleshooting-guide.md
│   ├── copilot-studio-resources.json
│   ├── power-automate-copilot-integration.md
│
├── GPT - BizKit Software Development Team/
│   ├── output/
│   │   ├── index.html
│   │   ├── prompt_input.html
│   │   ├── scripts.js
│   │   ├── styles.css
│   ├── BizKit - Software Development Team (GPT system prompt).md
│
├── Interactive Learning Pages/
│   ├── Advanced Prompt Engineering Calculator.html
│   ├── AI Prompt Engineering Academy.html
│   ├── AI Prompt Engineering Infographic.html
│   ├── Language Model Context Management.html
│   ├── Prompt Engineering Cookbook - websim.ai.html
│   ├── Prompt Engineering Timeline Explorer.html
│   ├── The Status Quo of Prompt Engineering.html
│
├── The-Status-Quo-of-Prompt-Engineering--Greg-DeCarlo-2024.pdf
├── High-Dimensional-Latent-Space.png
├── prompt-engineering-techniques.md
└── Tokenization-and-Embeddings-BackPropagation.png
```

For more information, visit the [Prompt Engineering Resources GitHub page](https://github.com/scalable-dynamics/prompt-engineering-resources).