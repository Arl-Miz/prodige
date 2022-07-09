import { StyleSheet, Button, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
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

const login =
  "https://cdn-icons.flaticon.com/png/512/3015/premium/3015474.png?token=exp=1657377425~hmac=46565573d146d91ec31afaafc7870812";
const signIn =
  "https://cdn-icons.flaticon.com/png/512/3193/premium/3193101.png?token=exp=1657377425~hmac=6f3e7d4ab5623d2a9a58aa592159648b";

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validation}
      onSubmit={(values, formikActions) => {
        setTimeout(() => {
          console.log(values);
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
            marginTop: 20,
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
            value={props.values.password}
            placeholder="********"
            secureTextEntry
          />
          <FormInput
            error={
              props.touched.confirmPassword && props.errors.confirmPassword
            }
            onChangeText={props.handleChange("confirmPassword")}
            onBlur={props.handleBlur("confirmPassword")}
            value={props.values.confirmPassword}
            placeholder="********"
            secureTextEntry
          />
          <View style={styles.container}>
            <View style={styles.btn_container}>
              <View style={{ position: "absolute", left: 40, width: 110 }}>
                <FormSubmitButton
                  submitting={props.isSubmitting}
                  onPress={props.handleSubmit}
                  title="Submit"
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  right: 40,
                  width: 110,
                  padding: 3,
                }}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={styles.circleGradient}>
                    <Text style={styles.visit}>Home</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* <Button
                  title="Right button"
                  onPress={() => Alert.alert("Right button pressed")}
                /> */}
            </View>
          </View>
        </View>
      )}
    </Formik>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text style={{ fontSize: 30 }}>Sign in</Text>
    //   <Button onPress={() => navigation.navigate("Home")} title="open Modal" />
    // </View>
  );
};

export default SignIn;

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
    borderColor: "#000",
    padding: 10,
    margin: 15,
    fontSize: 19,
    width: "90%",
    borderRadius: 6,
  },
  container: {
    width: "100%",
  },
  btn_container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    margin: 15,
  },
});
