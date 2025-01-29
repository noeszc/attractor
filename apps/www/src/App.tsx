import {
  DropdownMenu,
  Avatar,
  Tabs,
  Select,
  Button,
  useToast,
  ToastAction,
} from "@attractor/ui";

function App() {
  const { toast } = useToast();
  return (
    <>
      <pre>App</pre>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            Log out
            <DropdownMenu.Shorcut>⇧⌘Q</DropdownMenu.Shorcut>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Avatar.Root>
        <Avatar.Image src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Jack"></Avatar.Image>
      </Avatar.Root>
      <Select.Root>
        <Select.Trigger className="w-[180px]">
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Tabs.Root defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
          Make changes to your account here.
        </Tabs.Content>
        <Tabs.Content value="password">Change your password here.</Tabs.Content>
      </Tabs.Root>
    </>
  );
}

export default App;
