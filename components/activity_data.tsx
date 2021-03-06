import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export interface IDataPageProps {
  data: any;
  screenNumber: number;
  editing: boolean;
  handlerFromParent: any;
}

export interface IDataPageState {
  text: string;
  textHeight: string;
}

export default class ActivityData extends React.Component<
  IDataPageProps,
  IDataPageState
> {
  constructor(props: IDataPageProps) {
    super(props);
    this.state = {
      text: this.props.data.weight,
      textHeight: this.props.data.height,
    };
  }

  // public updateTextField = (value: string) => {
  // }
  handlerFromParent(evt: any) {
    evt.preventDefault();
    const value: any = this.state.text;
    const valueHeight: any = this.state.textHeight;
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    if (this.props.screenNumber === 1) {
      this.props.handlerFromParent(value, valueHeight);
    } else if (this.props.screenNumber === 2) {
      this.props.handlerFromParent(value / 1000, valueHeight / 100);
    }
  }

  public render() {
    if (this.props.screenNumber === 1) {
      if (this.props.editing) {
        return (
          <View style={styles.Activity}>
            <View style={styles.Activity_row}>
              <TextInput
              style=
              {{
                color : "black", height: 40,
              }}
                  underlineColorAndroid= "black"
                value={this.state.text}
                onChangeText={(text) => this.setState({ text })}
                onSubmitEditing={this.handlerFromParent.bind(this)}
              />
              <Text style={styles.Activity_text}>kg</Text>
            </View>
            <View style={styles.Activity_row}>
              <TextInput
              style=
              {{
                color : "black", height: 40,
              }}
                underlineColorAndroid= "black"
                value={this.state.textHeight}
                onChangeText={(textHeight) => this.setState({textHeight})}
                onSubmitEditing = {this.handlerFromParent.bind(this)}
              />
              <Text style={styles.Activity_text}> m</Text>
              </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.steps} steps
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.distance} m
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.climbed} m
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.calories / 1000} kcal
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.heartRate} bps
              </Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.Activity}>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.weight} kg
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.height} m
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.steps} steps
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.distance} m
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.climbed} m
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.calories / 1000} kcal
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.heartRate} bps
              </Text>
            </View>
          </View>
        );
      }
    } else if (this.props.screenNumber === 2) {
      if (this.props.editing) {
        return (
          <View style={styles.Activity}>
            <View style={styles.Activity_row}>
              <TextInput style= {{ color : "black", height: 40 }}
                  underlineColorAndroid= "black"
                value={this.props.data.weight}
                onChangeText={(text) => this.setState({ text })}
                onSubmitEditing={this.handlerFromParent.bind(this)}
              />
              <Text style={styles.Activity_text}>g</Text>
            </View>
            <View style={styles.Activity_row}>
              <TextInput
              style=
              {{
                color : "black", height: 40,
              }}
                  underlineColorAndroid= "black"
                value={this.props.data.height}
                onChangeText={(textHeight) => this.setState({textHeight})}
                onSubmitEditing = {this.handlerFromParent.bind(this)}
              /><Text style={styles.Activity_text}> cm</Text>
              </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.steps} steps
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.distance * 100} cm
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.climbed * 100} cm
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.calories} cal
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.heartRate} bps
              </Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.Activity}>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.weight * 1000} g
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.height * 100} cm
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.steps} steps
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.distance * 100} cm
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.climbed * 100} cm
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.calories} cal
              </Text>
            </View>
            <View style={styles.Activity_row}>
              <Text style={styles.Activity_text}>
                {this.props.data.heartRate} bps
              </Text>
            </View>
          </View>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  Activity: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  Activity_row: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Activity_text: {
    fontSize: 17,
    paddingLeft: 10,
  },
});
