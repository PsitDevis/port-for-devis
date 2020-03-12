import Button from './';
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
 
export default {
  title: "Button",
  decorators: [withKnobs]
};

export const withText = () => <Button click={action('clicked')} text={text("Text", "Click here")}/>;
