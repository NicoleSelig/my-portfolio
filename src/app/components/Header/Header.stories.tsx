import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = {
  args: {},
  parameters: {
    theme: "light",
  },
};

export const Dark: Story = {
  args: {},
  parameters: {
    theme: "dark",
  },
};
