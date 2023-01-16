import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  const text = router.query.text;
  
  return (
    <div>
      dd
    </div>
  );
}

