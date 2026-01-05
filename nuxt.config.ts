// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false, // GitHub Pages - static
    target: "static",
    // app: {
    //     baseURL: "/",
    //     head: {
    //         title: "Học tiếng Trung tại Phước Hòa, Phú Giáo – Dễ hiểu, chuẩn phim Trung Quốc",
    //         meta: [
    //             { charset: "utf-8" },
    //             {
    //                 name: "viewport",
    //                 content: "width=device-width, initial-scale=1",
    //             },
    //             {
    //                 name: "description",
    //                 content:
    //                     "Website học tiếng Trung online tại xã Phước Hòa, huyện Phú Giáo. Học qua phim Trung Quốc, từ vựng – mẫu câu dễ nhớ, phù hợp người mới bắt đầu.",
    //             },
    //             {
    //                 name: "keywords",
    //                 content:
    //                     "tiếng trung, học tiếng trung, học tiếng trung tại phước hòa, học tiếng trung phú giáo, tiếng trung phim, học tiếng trung online, học tiếng trung cơ bản",
    //             },

    //             // Open Graph
    //             { property: "og:type", content: "website" },
    //             {
    //                 property: "og:title",
    //                 content:
    //                     "Học tiếng Trung tại Phước Hòa – Học qua phim Trung Quốc",
    //             },
    //             {
    //                 property: "og:description",
    //                 content:
    //                     "Khóa học tiếng Trung online tại Phước Hòa, Phú Giáo. Học từ vựng – hội thoại qua phim Trung Quốc, dễ học, dễ nhớ.",
    //             },
    //             {
    //                 property: "og:image",
    //                 content:
    //                     "https://phugiao-hcm.github.io/tieng-trung-co-trang/images/og-image.png",
    //             },
    //             {
    //                 property: "og:url",
    //                 content:
    //                     "https://phugiao-hcm.github.io/tieng-trung-co-trang/",
    //             },
    //         ],
    //         link: [
    //             { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
    //             { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    //             { rel: "manifest", href: "/site.webmanifest" },
    //         ],
    //     },
    // },

    // 🌐 SEO modules
    // modules: ["@nuxtjs/robots", "@nuxtjs/seo"],

    // site: {
    //     url: "https://phugiao-hcm.github.io/tieng-trung-co-trang",
    //     name: "Học tiếng Trung Phước Hòa",
    //     description:
    //         "Website học tiếng Trung online tại xã Phước Hòa, huyện Phú Giáo",
    // },

    // robots: {
    //     rules: [
    //         { userAgent: "*", allow: "/" },
    //     ],
    //     sitemap:
    //         "https://phugiao-hcm.github.io/tieng-trung-co-trang/sitemap.xml",
    // },

    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },

    compatibilityDate: "2025-07-15",
});
