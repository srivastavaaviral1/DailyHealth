import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import ActivityData from "./activity_data";
import ActivityList from "./activity_list";

export interface IPinPageProps {
  screenProps: any;
  tabBarLabel: string;
  handlerFromParent: any;
}

export interface IPinPageState {
  screenNumber: number;
}
export default class MksPage extends React.Component<
  IPinPageProps,
  IPinPageState
> {
  constructor(props: IPinPageProps) {
    super(props);
    this.state = {
      screenNumber: 1,
    };
  }

  public render() {
    if (this.props.tabBarLabel === "in MKS") {
      this.setState({
        screenNumber: 1,
      });
    } else if (this.props.tabBarLabel === "in CGS") {
      this.setState({
        screenNumber: 2,
      });
    }

    return (
      <View style={styles.Activity}>
        <View>
          <ActivityList />
        </View>
        <View>
          <ActivityData
            data={this.props.screenProps.data}
            screenNumber={this.state.screenNumber}
            editing={this.props.screenProps.editing}
            handlerFromParent = {this.props.screenProps.handlerFromParent}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Activity: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});
