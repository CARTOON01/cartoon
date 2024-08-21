import { Button } from "@/components/ui/button";

const error = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <h2 className="text-xl font-medium">
                Something went wrong
            </h2>
            <Button asChild>
                Go back
            </Button>
            
        </div>
    );
}

export default error;