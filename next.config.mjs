const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'lovely-flamingo-139.convex.cloud'
            },
            {
            protocol: 'https',
            hostname: 'amicable-swan-517.convex.cloud'
            },
            {
            protocol: 'https',
            hostname: 'img.clerk.com'
            },
        ]
    }
};

export default nextConfig;