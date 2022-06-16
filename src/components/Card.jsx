import React, { useState } from "react";
import { Text, Image, View } from "react-native";
import {
  OptionImg,
  CloseImg,
  ShareImg,
  DuplicateImg,
  DeleteImg,
} from "../constants/images";
import commonStyles from "../styles";
import { FloatingAction } from "react-native-floating-action";
import styles from "./CardStyle";
import colors from "../constants/colors";

const Card = ({ data, onOptionPress, onDelete, onDuplicate, onShare }) => {
  const { id, name } = data;
  const [isSelected, setIsSelected] = useState(false);

  const actions = [
    {
      text: "Share",
      render: () => <Image source={ShareImg} style={styles.actionButtonIcon} />,
      name: "bt_share",
      position: 1,
      textBackground: "transparent",
      color: colors.greenTeal,
      margin: 10,
      animated: true,
    },
    {
      text: "Duplicate",
      icon: DuplicateImg,
      name: "bt_duplicate",
      position: 2,
      render: () => (
        <Image source={DuplicateImg} style={styles.actionButtonIcon} />
      ),
      animated: true,
    },
    {
      text: "Delete",
      icon: DeleteImg,
      name: "bt_delete",
      render: () => (
        <Image source={DeleteImg} style={styles.actionButtonIcon} />
      ),
      position: 3,
      animated: true,
      textElevation: 10,
    },
  ];

  const handlePressItem = (name) => {
    if (name === "bt_share") onShare(id);
    else if (name === "bt_duplicate") onDuplicate(id);
    else if (name === "bt_delete") onDelete(id);
  };
  return (
    <View style={styles.cardContainer}>
      <Text style={commonStyles.textStyle6}>{name}</Text>
      <FloatingAction
        actions={actions}
        floatingIcon={<Image source={isSelected ? CloseImg : OptionImg} />}
        showBackground={false}
        onPressMain={() => {
          onOptionPress(data);
          setIsSelected(!isSelected);
        }}
        tintColor="white"
        color="transparent"
        position="right"
        onPressItem={(name) => {
          handlePressItem(name);
        }}
        animated
        overlayColor="red"
        distanceToEdge={{ vertical: -5, horizontal: 0 }}
      />
    </View>
  );
};
export default Card;
