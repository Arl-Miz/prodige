import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";

const validation = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(3, "Invalid name")
    .required("Name is required"),
  email: Yup.string().email("Invalid Email!").required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "password is too short!")
    .required("password is required"),
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    "password does not match!"
  ),
});
const Capitalize = (word) => {
  return word
    .split("")
    .map((letter, index) =>
      index ? letter.toUpperCase() : letter.toUpperCase()
    )
    .join("");
};

const SignUp = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          backgroundColor: "#ffffffff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderRadius: 30,
            backgroundColor: "#000000",
            height: height / 1.6,
            width: width / 1.1,
            paddingTop: 50,
          }}
        >
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validation}
            onSubmit={(values, formikActions) => {
              console.log(values);
              Alert.alert(
                `hi ${Capitalize(values.fullName)} !`,
                "You are now signed in",
                [
                  {
                    text: "OK",
                    onPress: () => navigation.navigate("Home"),
                    style: "destructive",
                  },
                ]
              );
              setTimeout(() => {
                formikActions.resetForm();
                formikActions.setSubmitting(false);
              }, 5000);
            }}
          >
            {(props) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 14,
                }}
              >
                <FormInput
                  error={props.touched.fullName && props.errors.fullName}
                  onChangeText={props.handleChange("fullName")}
                  onBlur={props.handleBlur("fullName")}
                  value={props.values.fullName}
                  label="Full Name"
                  placeholder="example name"
                />
                <FormInput
                  error={props.touched.email && props.errors.email}
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  label="Email"
                  placeholder="example email"
                  value={props.values.email}
                />
                <FormInput
                  error={props.touched.password && props.errors.password}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  label="passwoed"
                  value={props.values.password}
                  placeholder="********"
                  secureTextEntry
                />
                <FormInput
                  error={
                    props.touched.confirmPassword &&
                    props.errors.confirmPassword
                  }
                  onChangeText={props.handleChange("confirmPassword")}
                  onBlur={props.handleBlur("confirmPassword")}
                  label="confirm passwoed"
                  value={props.values.confirmPassword}
                  placeholder="********"
                  secureTextEntry
                />
                {/* <View style={styles.container}> */}
                <View style={styles.btn_container}>
                  {/* <View style={{ position: "absolute", left: 40, width: 110 }}> */}
                  <FormSubmitButton
                    submitting={props.isSubmitting}
                    onPress={props.handleSubmit}
                    title="Submit"
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignIn")}
                  //   onPress={() => navigation.navigate("SignUp")}
                >
                  <View>
                    <Text style={{ color: "#6a97e5" }}>
                      Don't have an account?
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  circleGradient: {
    backgroundColor: "#000000",
    borderRadius: 8,
    padding: 8,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "#060606",
    color: "#008f68",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 10,
    margin: 15,
    fontSize: 19,
    width: "90%",
    borderRadius: 6,
  },
  //   container: {
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     // width: "100%",
  //   },
  btn_container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 15,
  },
});
