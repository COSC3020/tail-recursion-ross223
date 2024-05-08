[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

The non-tail recursive version of fibonacci has a different runtime than
that of my implementation of tail recursive fibonacci. The non-tail 
version calls 2 different recursive calls for the first fibonacci number
then 2 more for the each of those calls and so on. The tail recursive version
only makes one call so obviously this results in a different runtime.

Since there is one recursive call for each calculation of a fibonacci number, 
this means that our function runs n times where n is the nth fibonacci number
resulting in the worst case runtime of $\Theta (n)$ 

## Sources
This website was very helpful https://www.geeksforgeeks.org/tail-recursion-fibonacci/
