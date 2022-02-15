import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Image from "@ui/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormGroup, Label, Input, ErrorText } from "@ui/form-elements";
import Button from "@ui/button";
import { ArrowRight } from "react-feather";

const SignUp = ({ data, url }) => {
    const content = normalizedData(data?.homePage?.content || []);

    React.useEffect(() => {
        // console.log(content["logo-section"].images);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const [serverState, setServerState] = React.useState({
        submitting: false,
        status: null,
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        });
        if (ok) {
            form.reset();
        }
    };
    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "http://localhost:4000/api/user/register",
            data,
        })
            .then((res) => {
                console.log(res);
                handleServerResponse(true, "Thanks! for being with us", form);
            })
            .catch((err) => {
                console.log(err);
                handleServerResponse(false, err.response.data.error, form);
            });
    };

    return (
        <Layout pageTitle="Sign up" color={2} className="login-home">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper" style={{ marginTop: 120 }}>
                <div className="testimonial">
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                        <h4 className="title" style={{ marginBottom: 1 }}>
                            Sign Up
                        </h4>
                        <span
                            className="designation"
                            style={{ marginTop: -100 }}
                        >
                            Sign up with KMP distribution
                        </span>
                    </div>

                    <div className="inner">
                        <div className="sign-up-card-description col-lg-6">
                            <div className="login-form-wrapper">
                                <form
                                    className="rnt-contact-form rwt-dynamic-form row"
                                    id="contact-form"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="col-lg-12">
                                        <FormGroup>
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                name="email"
                                                id="email"
                                                type="text"
                                                {...register("email", {
                                                    required:
                                                        "Email is required",
                                                })}
                                            />
                                            {errors.email && (
                                                <ErrorText>
                                                    {errors.email?.message}
                                                </ErrorText>
                                            )}
                                        </FormGroup>
                                    </div>
                                    <div className="col-lg-6">
                                        <FormGroup>
                                            <Label htmlFor="fname">
                                                First Name
                                            </Label>
                                            <Input
                                                name="fname"
                                                id="fname"
                                                type="text"
                                                {...register("fname", {
                                                    required:
                                                        "First Name is required",
                                                })}
                                            />
                                            {errors.fname && (
                                                <ErrorText>
                                                    {errors.fname?.message}
                                                </ErrorText>
                                            )}
                                        </FormGroup>
                                    </div>
                                    <div className="col-lg-6">
                                        <FormGroup>
                                            <Label htmlFor="Lname">
                                                Last Name
                                            </Label>
                                            <Input
                                                name="Lname"
                                                id="Lname"
                                                type="text"
                                                {...register("Lname", {
                                                    required:
                                                        "Last Name is required",
                                                })}
                                            />
                                            {errors.Lname && (
                                                <ErrorText>
                                                    {errors.Lname?.message}
                                                </ErrorText>
                                            )}
                                        </FormGroup>
                                    </div>
                                    <div className="col-lg-12">
                                        <FormGroup>
                                            <Label htmlFor="password">
                                                Password
                                            </Label>
                                            <Input
                                                name="password"
                                                id="password"
                                                type="password"
                                                {...register("password", {
                                                    required:
                                                        "Last Name is required",
                                                })}
                                            />
                                            {errors.password && (
                                                <ErrorText>
                                                    {errors.password?.message}
                                                </ErrorText>
                                            )}
                                        </FormGroup>
                                    </div>
                                    <div className="col-lg-12">
                                        <FormGroup>
                                            <Label htmlFor="confirm">
                                                Please confirm the new password
                                            </Label>
                                            <Input
                                                name="confirm_password"
                                                id="confirm_password"
                                                type="password"
                                                {...register(
                                                    "confirm_password",
                                                    {
                                                        required:
                                                            "Please confirm password",
                                                    }
                                                )}
                                            />
                                            {errors.confirm_password && (
                                                <ErrorText>
                                                    {
                                                        errors.confirm_password
                                                            ?.message
                                                    }
                                                </ErrorText>
                                            )}
                                        </FormGroup>
                                    </div>

                                    <div className="col-lg-12">
                                        <Button
                                            className="login-button"
                                            type="submit"
                                        >
                                            <span>Sign Up</span>
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export const query = graphql`
    query SignPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-1" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-1" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "SignUp" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 6) {
            nodes {
                ...Article
            }
        }
    }
`;

SignUp.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default SignUp;
