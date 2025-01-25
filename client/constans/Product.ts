import { Product } from "./Props";

export const products: Product[] = [
  {
    id: "1",
    name: "Woman Clotcsh",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 2999,
    discountPercent: 45,
    category: "Dress",
    inStock: false,
    isNewSeason: false,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1730761609/product1-image1_repfzr.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1730761614/product1-image2_ve8iaf.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1730761620/product1-image3_bq7a8t.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1730761627/product1-image4_hffbkp.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e6b3e1f1c9",
        userId: "64ae4e5f2c99a9e6b3e1f1d0",
        productId: "1",
        comment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
        rating: 5,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Aysel",
          email: "aysel@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
      {
        id: "64ae4e5f2c99a9e6b35423ec9",
        userId: "64ae4e5f2c99a9e6b3e1f1d0",
        productId: "1",
        comment: "Nice fabric, but a bit tight around the waist. ",
        rating: 4,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "13377255",
          name: "Elif",
          email: "elif@example.com",
          emailVerified: null,
          image: "",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "2",
    name: "Nike Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 2999,
    category: "Shoes",
    discountPercent: 17,
    inStock: false,
    isNewSeason: true,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120321/3_pthuab.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120319/2_r5pymv.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120323/4_tbzib8.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120066/1_djusv4.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e6b3e1f1c9",
        userId: "64ae4e5f2c99a9e6b3e1f1d0",
        productId: "2",
        comment: "Great shoes! Very comfortable and stylish.",
        rating: 3,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "ADMİN",
        },
      },
      {
        id: "64ae4e5f2c99a9e6b35423ec9",
        userId: "64ae4e5f2c99a9e6b3e1f1d0",
        productId: "2",
        comment: "Comfortable and stylish.",
        rating: 5,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "13377255",
          name: "Jennie",
          email: "example@gmail.com",
          emailVerified: null,
          image: "",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "ADMİN",
        },
      },
    ],
  },
  {
    id: "3",
    name: "Red Dress",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 1499,
    discountPercent: 25,
    category: "Accessories",
    inStock: true,
    isNewSeason: true,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120061/1_ee3a8q.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120069/2_gfa1mp.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120070/3_dmvmig.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120072/4_nuwp0q.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e6b3e1f1c9",
        userId: "64ae4e5f2c99a9e6b3e1f1d0",
        productId: "3",
        comment: "Beautiful dress, perfect for formal events.",
        rating: 5,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Zeynep",
          email: "zeynep@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
      {
        id: "64ae4e5f4c99a9e6b3e1f1c9",
        userId: "64ae4e5f2c99229e6b3e1f1d0",
        productId: "3",
        comment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
        rating: 5,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Zeynep",
          email: "zeynep@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "4",
    name: "Resdfsdfdsffffffffffffffffffffffffffffffffffffffffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 1499,
    discountPercent: 20,
    category: "Accessories",
    isNewSeason: false,
    inStock: true,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120062/3_waxupk.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120058/2_wdjc46.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120064/4_ebak3h.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120054/1_rjpxvd.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e6b3e1f1c9",
        userId: "64ae4e5f2c99a9e6b3e1f1d0",
        productId: "4",
        comment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi..",
        rating: 4,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Ali",
          email: "ali@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "5",
    name: "Blue T-Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 799,
    discountPercent: 10,
    category: "Clothing",
    inStock: true,
    isNewSeason: false,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120056/4_nmxqdq.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120052/2_locb8a.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120050/3_mxx9cv.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120048/1_jfxgue.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e6b3e1f1c9",
        userId: "64ae4e5f2c99a9e6b3e1f1d0",
        productId: "5",
        comment: "Love this t-shirt, it's perfect for casual outings.",
        rating: 5,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Murat",
          email: "murat@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "6",
    name: "Luxury Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 10999,
    discountPercent: 5,
    category: "Accessories",
    inStock: true,
    isNewSeason: true,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120003/1_v1o8ca.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120008/2_merers.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120011/4_lyvl2z.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120009/3_nqsskj.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e6b3e1f1c9",
        userId: "64ae4e5f2c99a729e6b3e1f1d0",
        productId: "6",
        comment: "A beautiful and timeless piece.",
        rating: 5,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Fatma",
          email: "fatma@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
      {
        id: "64ae4e5f2c99a586b3e1f1c9",
        userId: "64ae4e5f452c99a9e6b3e1f1d0",
        productId: "6",
        comment: "A beautiful and timeless piece.",
        rating: 1,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Fatma",
          email: "fatma@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "7",
    name: "Gaming Laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 25999,
    discountPercent: 15,
    category: "Electronics",
    inStock: true,
    isNewSeason: true,
    sizes: ["36", "38", "40", "42"],

    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120016/1_solyoa.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120018/2_f1v81w.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120020/3_oovdcf.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120022/4_kd9mgk.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e63e1f57c9",
        userId: "64ae4e5f2c99a9e37b3e1f1d0",
        productId: "6",
        comment: "A beautiful and timeless piece.",
        rating: 5,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Fatma",
          email: "fatma@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "8",
    name: "Smartphone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 19999,
    discountPercent: 12,
    category: "Electronics",
    inStock: true,
    isNewSeason: true,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120031/4_b00jre.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120028/2_xqzqdk.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120030/3_kfrms0.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120027/1_drdrhd.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e6b3e1f1c9",
        userId: "64ae4e5f2c95a9e6b3e1f1d0",
        productId: "6",
        comment: "A beautiful and timeless piece.",
        rating: 4,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Fatma",
          email: "fatma@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "9",
    name: "Wireless Earbuds",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 899,
    discountPercent: 20,
    category: "Accessories",
    inStock: true,
    isNewSeason: false,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120041/1_gy98oi.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120045/2_ot0kby.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120047/4_vec5mm.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120044/3_tveees.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a94e6b3e1f1c9",
        userId: "64ae4e5f273c99a9e6b3e1f1d0",
        productId: "6",
        comment: "A beautiful and timeless piece.",
        rating: 2,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Fatma",
          email: "fatma@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "10",
    name: "Kitchen Mixer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, nulla natus nostrum repellendus quam praesentium amet! Beatae nam eaque ipsam eveniet ullam aperiam rerum, consequuntur pariatur? Corporis molestias iusto id. Repellendus dolorum vitae minima sit et, omnis autem, incidunt quos inventore, totam magnam recusandae consequatur deleniti explicabo libero blanditiis sequi! Accusantium eius pariatur voluptatum debitis? Saepe consequuntur quasi voluptatem omnis explicabo laborum voluptatibus! Id unde doloribus esse possimus dolore magnam, quae similique qui hic, aperiam optio. Culpa ducimus assumenda necessitatibus, quia illum exercitationem eum sequi velit saepe ratione quos, nam quae quidem pariatur tenetur aperiam incidunt error maxime libero? Eaque id ut nihil voluptate labore. Voluptatum quis corporis dolorum, nam totam minus modi. Ipsam velit sit molestias labore quae aut non tenetur sed exercitationem quos, in eveniet aspernatur incidunt aliquam maxime alias ex quo reiciendis ea. Exercitationem velit soluta accusantium aliquid maxime pariatur! Eaque, non magnam? Nihil fugit cum nisi.",
    price: 2499,
    discountPercent: 18,
    category: "Home Appliances",
    inStock: false,
    isNewSeason: false,
    sizes: ["36", "38", "40", "42"],
    images: [
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120039/4_y9evja.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120038/2_nmoghp.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120034/1_un61c0.webp",
      "https://res.cloudinary.com/dgoothqal/image/upload/v1737120036/3_j94b7o.webp",
    ],
    reviews: [
      {
        id: "64ae4e5f2c99a9e6553b3e1f1c9",
        userId: "64ae4e5f2c99a9e6b3237e1f1d0",
        productId: "6",
        comment: "A beautiful and timeless piece.",
        rating: 5,
        createDate: "2023-07-06T06:08.330672",
        user: {
          id: "1555255",
          name: "Fatma",
          email: "fatma@example.com",
          emailVerified: null,
          image:
            "https://res.cloudinary.com/dgoothqal/image/upload/v1730673241/avatars/sm36sxm2i2ukv4zk6yo6.jpg",
          hashedPassword: null,
          createdAt: "2025-11-06T06:08.33067",
          updatedAt: "2025-12-06T07:08.330672",
          role: "USER",
        },
      },
    ],
  },
];
