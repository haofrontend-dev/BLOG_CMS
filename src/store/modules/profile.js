import { defineStore } from "pinia";

import { getProfile } from "@/api/profile.api";
import { reponseError, reponseSuscess } from "@/utils/response";

export const useProfileStore = defineStore("profile", {
    state: () => ({
        profile: {}
    }),
    actions: {
        setProfile(profile) {
            this.profile = profile;
        },

        // Fetch profile
        async dispatchGetProfile() {
            try {
                const { status, metadata } = await getProfile();
                if (status === 200) {
                    this.setProfile(metadata);
                    return reponseSuscess({});
                }

                return reponseError({});
            } catch (error) {
                return reponseError({});
            }
        }
    }
});
