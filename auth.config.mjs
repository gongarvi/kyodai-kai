import BattleNet from "@auth/core/providers/battlenet";
import { defineConfig } from "auth-astro";

export default defineConfig({
  secret: import.meta.env.AUTH_SECRET,
  providers: [
    BattleNet({
      clientId: import.meta.env.AUTH_BATTLENET_ID,
      clientSecret: import.meta.env.AUTH_BATTLENET_SECRET,
      issuer: "https://eu.battle.net/oauth",
      // token: true
    }),
  ],
});
