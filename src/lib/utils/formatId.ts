export function formatId(id: string) {
	const trimmedId = id.trim();
	if (trimmedId.length >= 4) {
		return `${trimmedId}`;
	}
	return `${trimmedId.padStart(3, '0')}`;
}
