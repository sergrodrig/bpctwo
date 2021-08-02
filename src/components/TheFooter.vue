<template>
  <!-- Footer -->
  <div class="bg-yellow-300">
    <div class="container mx-auto">
      <footer class="text-gray-600 body-font">
        <div
          class="
            container
            flex flex-col
            items-center
            px-5
            py-8
            mx-auto
            sm:flex-row
          "
        >
          <a
            class="
              flex
              items-center
              justify-center
              font-medium
              text-gray-900
              title-font
              md:justify-start
            "
          >
            <logo-bpc class="w-12" />
          </a>
          <span
            class="
              inline-flex
              items-center
              justify-center
              mt-4
              space-x-3
              sm:ml-auto sm:mt-0 sm:justify-start
            "
          >
            <a
              href="https://www.twitch.tv/bulletsproofcompany"
              class="
                ml-3
                text-black
                outline-none
                hover:text-indigo-500
                focus:text-indigo-500
              "
            >
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/chernobyl.gaming.9"
              class="
                ml-3
                text-black
                outline-none
                hover:text-indigo-500
                focus:text-indigo-500
              "
            >
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                />
              </svg>
            </a>
            <a
              href="https://discord.gg/MVbCmRPz"
              class="
                ml-3
                text-black
                outline-none
                hover:text-indigo-500
                focus:text-indigo-500
              "
            >
              <svg
                class="fill-current"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"
                />
              </svg>
            </a>
            <a
              href="https://sudoers.cl"
              class="outline-none hover:text-indigo-500 focus:text-indigo-500"
            >
              <img
                src="http://54.80.213.237/wp-content/uploads/2020/05/sudoers08-scaled.jpg"
                alt="logo sudoers.cl"
                class="w-24"
              />
            </a>
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import LogoBpc from "@/components/LogoBpc";

export default {
  name: "TheFooter",
  components: {
    LogoBpc,
  },
};
</script>

<style></style>
