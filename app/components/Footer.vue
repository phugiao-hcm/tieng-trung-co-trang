<template>
    <footer class="bg-gray-900 text-white py-10 mt-20">
        <div
            class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            <!-- Logo & giới thiệu -->
            <div>
                <h2 class="text-xl font-bold mb-2">Tiếng Trung Phước Hòa</h2>
                <p class="text-gray-400 text-sm">
                    Giúp người học nhớ nhanh, nhớ lâu và nhớ sâu chữ Hán – Phần
                    khó nhất trong qua trình học tiếng Trung. Uy tín - Minh bạch
                    - Tận tâm phục vụ.
                </p>
                <p class="text-gray-400 text-sm mt-3">
                    <strong>Địa chỉ:</strong> Xã Phước Hòa, Thành phố Hồ Chí
                    Minh
                </p>
            </div>

            <!-- Liên kết -->
            <div>
                <h3 class="font-semibold mb-3">Liên kết nhanh</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                    <li>
                        <NuxtLink to="/" class="hover:text-orange-400">
                            Khóa học
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-orange-400">
                            Liên hệ
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Mạng xã hội -->
            <div>
                <h3 class="font-semibold mb-3">Kết nối với chúng tôi</h3>
                <p class="text-sm text-gray-400 mt-4">
                    Hotline/Zalo tư vấn:
                    <a
                        href="tel:0937704598"
                        class="text-orange-400 hover:underline"
                        >0937 704 598</a
                    >
                </p>
            </div>
        </div>

        <!-- Copyright -->
        <div
            class="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500"
        >
            &copy; 2025 Tiếng Trung Phước Hòa. All rights reserved.
        </div>
    </footer>
</template>

