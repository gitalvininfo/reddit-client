import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fetchSubreddit } from '@/services/reddit-service';
import useSubredditStore from '@/stores/subredditStore';
import { useState } from 'react';

function AddSubredditDialog() {
  const addSubreddit = useSubredditStore((state) => state.addSubreddit);
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetchSubreddit(name);
      addSubreddit(name);
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert(`Invalid subreddit name`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Add Subreddit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enter the name of subreddit</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmitForm}>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="submit">Add Subreddit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddSubredditDialog;
