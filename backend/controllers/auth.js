import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utlis/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passowrd don't match"});
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "Username already exist"});
        }

        // hash password..
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newObject = {
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic: girlProfilePic
        }
        const newUser = await User.create(newObject);
        // jwt token
        generateTokenAndSetCookie({userId: newUser._id, username: newUser.username}, res);

        res.status(201).json({user: newUser});

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: error.message});   
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "" );

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookie({userId: user._id, username: user.username}, res);

        res.status(200).json(user);

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error: error.message}); 
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: error.message});
    }
}