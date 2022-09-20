package com.maximedillion.traveller.utils;

import com.auth0.jwt.algorithms.Algorithm;

public final class SecurityUtils {
    public static Algorithm ALGORITHM = Algorithm.HMAC256("secret".getBytes()); // Unsecure for production

}
