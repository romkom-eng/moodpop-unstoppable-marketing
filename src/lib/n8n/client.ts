// This client handles interactions with the n8n automation workflows.
// It will be used by the Vibe-Coding Orchestrator to trigger content generation and other automated tasks.

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "";

export interface ContentGenerationRequest {
    topic: string;
    keywords: string[];
    targetAudience: string;
    tone: "professional" | "witty" | "urgent" | "sympathetic";
}

export const triggerContentWorkflow = async (data: ContentGenerationRequest) => {
    if (!N8N_WEBHOOK_URL) {
        console.warn("N8N_WEBHOOK_URL is not set. Mocking response.");
        return { success: true, message: "Workflow triggered (Mock)", runId: "mock-run-id" };
    }

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`n8n workflow failed with status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error triggering n8n workflow:", error);
        throw error;
    }
};
