import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AuthModal = () => {
  return (
    <DialogContent flex items-center justify-center flex-col>
      <DialogHeader>
        <DialogTitle>Добро пожаловать в theBron</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        Войдите или зарегистрируйтесь
      </DialogDescription>
      <form>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
      </form>
    </DialogContent>
  );
};

export default AuthModal;
