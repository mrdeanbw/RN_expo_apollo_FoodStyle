import React, { useEffect, useState } from "react";

import {
  Image,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Share,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { LogoImg, AddImg } from "../constants/images";
import { CARD_SHARE_BASEURL } from "../constants";
import colors from "../constants/colors";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import AppLoading from "expo-app-loading";
import { useQuery, useMutation } from "@apollo/client";
import { CARDS_QUERY } from "../graphql/queries";
import {
  CREATE_CARD,
  DELETE_CARD,
  DUPLICATE_CARD,
  SHARE_CARD,
} from "../graphql/mutations";
import commonStyles from "../styles";
import styles from "./CardsListStyle";

import { updateCards } from "../reducers/cardsReducer";

const CardsList = () => {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  const { data: cardsList, loading, error, refetch } = useQuery(CARDS_QUERY);
  const [createCard, { data: createMutationRes }] = useMutation(CREATE_CARD);
  const [deleteCard, { data: deleteMutationRes }] = useMutation(DELETE_CARD);
  const [duplicateCard, { data: duplicateMutationRes }] =
    useMutation(DUPLICATE_CARD);
  const [shareCard, { data: shareMutationRes }] = useMutation(SHARE_CARD);
  const [selectedCard, setSelectedCard] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    refetch();
  }, [createMutationRes, deleteMutationRes, duplicateMutationRes]);

  useEffect(() => {
    if (shareMutationRes?.shareCard) {
      const url = `${CARD_SHARE_BASEURL}${shareMutationRes.shareCard}`;
      handleShare(url);
    }
  }, [shareMutationRes]);

  useEffect(() => {
    if (cardsList?.cards) {
      dispatch(updateCards(cardsList.cards));
    }
  }, [cardsList]);

  const onNewFoodStyleBtn = () => {
    createCard({
      variables: {
        data: {
          name: "New Food Style - " + new Date().getTime(),
          minPrice: null,
          maxPrice: null,
          locationTypeIds: [],
          locationCuisineTypeIds: [],
          dishTypeIds: [],
          courseTypeIds: [],
          dietIds: [],
          excludedIngredientIds: [],
        },
      },
    });
  };

  const onOptionPress = (card) => {
    setModalVisible(true);
    setSelectedCard(card);
  };

  const onDelete = (id) => {
    deleteCard({
      variables: {
        deleteCardId: id,
      },
    });
  };

  const onDuplicate = (id) => {
    duplicateCard({
      variables: {
        duplicateCardId: id,
      },
    });
  };

  const onShare = (id) => {
    shareCard({
      variables: {
        shareCardId: id,
      },
    });
  };

  const handleShare = async (url) => {
    try {
      const result = await Share.share({
        message: "FoodStyle",
        url,
      });
      if (result.action === Share.sharedAction) {
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderItem = ({ item }) => (
    <Card
      data={item}
      onOptionPress={onOptionPress}
      onDelete={onDelete}
      onDuplicate={onDuplicate}
      onShare={onShare}
      selectedCard={selectedCard}
    />
  );

  if (loading) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <LinearGradient
          colors={[colors.orangish, colors.maize]}
          style={styles.linearGradientContainer}
        >
          <View style={styles.logoContainer}>
            <Image source={LogoImg}></Image>
          </View>
        </LinearGradient>

        <View style={styles.cardListContainer}>
          <FlatList
            data={cards}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={onNewFoodStyleBtn}
        >
          <Image source={AddImg}></Image>
          <Text style={commonStyles.textStyle6}>New Food Style</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default CardsList;
