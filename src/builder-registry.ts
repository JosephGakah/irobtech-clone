"use client";
import { Builder } from "@builder.io/react";
import { Architecture } from "./components/architecture";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Architecture, {
  name: "Architecture",
});
