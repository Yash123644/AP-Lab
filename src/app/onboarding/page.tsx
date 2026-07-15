"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useProgress } from "@/context/ProgressContext";
import { Onboarding } from "@/components/Onboarding";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function OnboardingPage() {
  const { currentUser, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading } = useProgress();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        router.push("/");
      } else if (!currentUser.emailVerified) {
        router.push("/verify-email");
      }
    }
  }, [currentUser, authLoading, router]);

  useEffect(() => {
    if (!progressLoading && progress && progress.isOnboarded) {
      router.push("/dashboard");
    }
  }, [progress, progressLoading, router]);

  if (authLoading || progressLoading || !currentUser || !currentUser.emailVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-navy">
        <LoadingSpinner />
      </div>
    );
  }

  // If user is already onboarded, render loading spinner during redirect
  if (progress && progress.isOnboarded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-navy">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Onboarding 
      onComplete={() => {
        router.push("/dashboard");
      }}
      userEmail={currentUser.email || undefined}
      userId={currentUser.uid}
    />
  );
}
