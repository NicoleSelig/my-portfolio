"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useRef, useState } from "react";

const supabase = createClientComponentClient();

type Props = {
  slug: string;
  noCount?: boolean;
  showCount?: boolean;
};

export default async function PostCount({
  slug,
  noCount = false,
  showCount = true,
}: Props) {
  const [views, setViews] = useState(0);

  const ref = useRef(true);
  useEffect(() => {
    if (!noCount && ref.current) {
      ref.current = false;
      incrementView(slug);
    }
  }, [slug, noCount]);

  if (showCount) {
    const count = getView(slug)
    setViews(await count ?? 0)
  };

  return <div>{views} views</div>;
}

async function incrementView(slug: string) {
  try {
    const { error } = await supabase.rpc("increment", {
      slug_text: slug,
    });

    if (error)
      console.error("An error occurred on view count inside try block", error);
  } catch (e) {
    console.error("An error occurred on view count", e);
  }
}

async function getView(slug: string): Promise<number> {
  try {
    const { data: views, error } = await supabase.from("views").select("count").match({slug}).single();

    if (error) {
        console.error("An error occurred on view count inside try block", error);
    }

    if (views) {
        return views.count
    }
    return 0
  } catch (e) {
    console.error("An error occurred on view count", e);
  }
}
