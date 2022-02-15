import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Image from "@ui/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormGroup, Label, Input, ErrorText } from "@ui/form-elements";
import Button from "@ui/button";
import { ArrowRight } from "react-feather";

const LoginPage = ({ data, url }) => {
    const content = normalizedData(data?.homePage?.content || []);

    // React.useEffect(() => {
    //     // console.log(content["logo-section"].images);
    // }, []);

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
            url: 'http://localhost:4000/api/user/register',
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
        <Layout pageTitle="Home Login" color={2} className="login-home">
            <div className="container login-container">
                <div className="text-center">
                    <div>
                        <Image
                            src={content["logo-section"].images[0].src}
                            alt="logo"
                        />
                    </div>
                    <div className="col-lg-12 tagline">
                        {content["header-section"].headings[0].content}
                    </div>

                    <div className="login-form-wrapper">
                        <div className="loginCard col-lg-4 mt-4">
                            <form
                                className="rnt-contact-form rwt-dynamic-form row"
                                id="contact-form"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="col-lg-12">
                                    <FormGroup>
                                        <Label htmlFor="name">Your Name</Label>
                                        <Input
                                            name="name"
                                            id="name"
                                            type="text"
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                        />
                                        {errors.name && (
                                            <ErrorText>
                                                {errors.name?.message}
                                            </ErrorText>
                                        )}
                                    </FormGroup>
                                </div>
                                <div className="col-lg-12">
                                    <FormGroup>
                                        <Label htmlFor="name">
                                            Your Password
                                        </Label>
                                        <Input
                                            name="name"
                                            id="name"
                                            type="text"
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                        />
                                        {errors.name && (
                                            <ErrorText>
                                                {errors.name?.message}
                                            </ErrorText>
                                        )}
                                    </FormGroup>
                                </div>

                                <div className="col-lg-12">
                                    <Button
                                        className="login-button"
                                        type="submit"
                                    >
                                        <span>Sign In</span>
                                        <ArrowRight />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-4">
                        New to KMP?{" "}
                        <a href="./regstration">Create an account.</a>
                    </div>
                    <div className="mt-4">
                        <a style={{ fontSize: 14 }} href="./reset">
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query LoginPageQuery {
        site {
            ...Site
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "Login" }) {
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

LoginPage.propTypes = {
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

export default LoginPage;
