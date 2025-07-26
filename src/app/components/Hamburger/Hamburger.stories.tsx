import type { Meta, StoryObj } from "@storybook/react";
import Hamburger from "./index";

const meta = {
  title: "Components/Hamburger",
  component: Hamburger,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the hamburger menu is open or closed",
    },
    onClick: {
      action: "clicked",
      description: "Callback function when the hamburger is clicked",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for styling",
    },
  },
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    onClick: () => {},
    className: "w-16 h-16",
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    onClick: () => {},
    className: "w-16 h-16",
  },
};

export const Large: Story = {
  args: {
    isOpen: false,
    onClick: () => {},
    className: "w-24 h-24",
  },
};
