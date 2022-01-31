import React from "react";
import { Form, Button, Message, TextArea, Divider } from "semantic-ui-react";

function CommonInputs({
  user: { bio, facebook, instagram, youtube, twitter },
  handleChange,
  showSocialLinks,
  setShowSocialLinks,
}) {
  return (
    <>
      {/* <Form.Field
        required
        control={TextArea}
        name="bio"
        // value={bio}
        // onChange={handleChange}
        placeholder="bio"
      /> */}
      <Form.TextArea
        label="bio"
        control={TextArea}
        required
        name="bio"
        value={bio}
        placeholder="Tell us more about you..."
        onChange={handleChange}
      />
      <Button
        content="Add Social Links"
        color="red"
        icon="at"
        type="button"
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />

      {showSocialLinks && (
        <>
          <Divider />
          <Form.Input
            icon={{
              name: "eye",
              circular: true,
              color: "blue",
            }}
            iconPosition="left"
            name="facebook"
            placeholder="facebook Link."
            value={facebook}
            onChange={handleChange}
          />

          <Form.Input
            icon={{
              name: "vk",
              circular: true,
              color: "yellow",
            }}
            iconPosition="left"
            name="twitter"
            value={twitter}
            placeholder="twitter Link."
            onChange={handleChange}
          />

          <Form.Input
            iconPosition="left"
            name="instagram"
            value={instagram}
            icon={{
              name: "vk",
              circular: true,
              color: "red",
            }}
            placeholder="instagram Link."
            onChange={handleChange}
          />

          <Form.Input
            iconPosition="left"
            name="youtube"
            value={youtube}
            icon={{
              name: "youtube",
              circular: true,
              color: "red",
            }}
            placeholder="youtube channel ."
            onChange={handleChange}
          />

          <Message
            icon="attention"
            info
            size="small"
            header="Social Media Links Are Optional!"
          />
        </>
      )}
    </>
  );
}

export default CommonInputs;
